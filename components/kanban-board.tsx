"use client";

import { Board } from "@/lib/models/models.types";
import { Award, Calendar, CheckCircle2, Mic, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CreateJobApplicationDialog from "./create-job-dialog";
import JobApplicationCard from "./job-application-card";
import { useBoard } from "@/lib/hooks/useBoards";
import { closestCorners, DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const COLUMN_CONFIG = [
  { color: "bg-cyan-600", icon: <Calendar className="h-4 w-4" /> },
  { color: "bg-purple-600", icon: <CheckCircle2 className="h-4 w-4" /> },
  { color: "bg-green-600", icon: <Mic className="h-4 w-4" /> },
  { color: "bg-yellow-600", icon: <Award className="h-4 w-4" /> },
  { color: "bg-red-600", icon: <XCircle className="h-4 w-4" /> },
];

function DroppableColumn({ column, config, boardId, sortedColumns }: any) {
  const { setNodeRef, isOver } = useDroppable({
    id: column._id,
    data: { type: "column", columnId: column._id },
  });

  const sortedJobs = [...(column.jobApplications || [])].sort((a, b) => a.order - b.order);

  return (
    <Card className="flex flex-col h-full shadow-sm border-none overflow-hidden bg-white">
      <CardHeader className={`${config.color} text-white p-3 shrink-0`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {config.icon}
            <CardTitle className="text-xs font-bold uppercase tracking-wider">{column.name}</CardTitle>
          </div>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{sortedJobs.length}</span>
        </div>
      </CardHeader>
      <CardContent
        ref={setNodeRef}
        className={`flex-1 p-2 min-h-37.5 transition-colors ${isOver ? "bg-blue-50" : "bg-slate-50"}`}
      >
        <SortableContext items={sortedJobs.map(j => j._id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {sortedJobs.map((job) => (
              <SortableJobCard key={job._id} job={job} columns={sortedColumns} />
            ))}
          </div>
        </SortableContext>
        <div className="mt-3">
          <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
        </div>
      </CardContent>
    </Card>
  );
}

function SortableJobCard({ job, columns }: any) {
  const { attributes, listeners, transform, transition, isDragging, setNodeRef } = useSortable({
    id: job._id,
    data: { type: "job", job },
  });
  const style = { transform: CSS.Translate.toString(transform), transition, opacity: isDragging ? 0.5 : 1 };
  return (
    <div ref={setNodeRef} style={style}>
      <JobApplicationCard job={job} columns={columns} dragHandleProps={{ ...attributes, ...listeners }} />
    </div>
  );
}

export default function KanbanBoard({ board }: { board: Board; userId: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { columns, moveJob } = useBoard(board);
  const sortedColumns = [...(columns || [])].sort((a, b) => a.order - b.order);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  function handleDragStart(event: DragStartEvent) { setActiveId(event.active.id as string); }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;
    const targetColumn = sortedColumns.find(col => col._id === over.id) || 
                         sortedColumns.find(col => col.jobApplications.some(j => j._id === over.id));
    if (targetColumn) await moveJob(active.id as string, targetColumn._id, 0);
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {sortedColumns.map((col, key) => (
          <DroppableColumn key={col._id} column={col} config={COLUMN_CONFIG[key]} boardId={board._id} sortedColumns={sortedColumns} />
        ))}
      </div>
      <DragOverlay>
        {activeId ? <div className="w-full max-w-75 rotate-2 shadow-2xl opacity-90"><div className="bg-white p-4 rounded border">Moving...</div></div> : null}
      </DragOverlay>
    </DndContext>
  );
}