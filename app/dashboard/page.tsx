import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import KanbanBoard from "../../components/kanban-board";

async function getBoard(userId: string) {
  "use cache";
  await connectDB();
  const boardDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  });

  if (!boardDoc) return null;
  return JSON.parse(JSON.stringify(boardDoc));
}

async function DashboardPage() {
  const session = await getSession();
  if (!session?.user) {
    redirect("/sign-in");
  }

  const board = await getBoard(session.user.id);

  return (
    <div className="min-h-screen bg-slate-50/50 overflow-x-hidden">
      <div className="mx-auto max-w-400 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Job Hunt
          </h1>
          <p className="mt-2 text-slate-600">Track and manage your job applications</p>
        </div>
        <KanbanBoard board={board} userId={session.user.id} />
      </div>
    </div>
  );
}

export default async function Dashboard() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Board...</div>}>
      <DashboardPage />
    </Suspense>
  );
}