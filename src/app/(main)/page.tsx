import ProblemListClient from "@/components/problem-table/ProblemListClient";
import { getProblems, getProblemsCount } from "@/repository/problem.repo";

const PAGE_SIZE = 20;

export default async function ProblemListPage() {
  const initialData = await getProblems(PAGE_SIZE, 0);
  const total = await getProblemsCount();

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <ProblemListClient initialData={initialData} total={total} />
    </div>
  );
}
