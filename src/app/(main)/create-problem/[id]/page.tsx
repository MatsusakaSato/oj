"use client";
import CreateProblemForm from "@/components/CreateProblemForm";
import useUser from "@/hooks/useUser";
import { getProblemById } from "@/repository/problem.repo";
import { ProblemSelectModel } from "@/schema/problem.schema";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateProblemPage() {
  const [problemInfo, setProblemInfo] = useState<ProblemSelectModel>();
  const params = useParams();
  const { user } = useUser();
  const id = params.id;
  useEffect(() => {
    const _ = async () => {
      const res = await getProblemById(Number(id));
      setProblemInfo(res);
    };
    _();
  }, []);
  return (
    <>
      <CreateProblemForm initialValue={problemInfo} userId={user?.id} />
    </>
  );
}
