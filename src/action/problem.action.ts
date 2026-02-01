"use server";
import { ProblemDTO } from "@/types/dto.types";
import { ProblemVO } from "@/types/vo.types";
import { problemRepo } from "@/repository/problem.repo";

export const createProblemAction = async (
  problem: ProblemDTO,
  userId: number,
): Promise<boolean> => {
  return await problemRepo.createProblem({
    ...problem,
    userId,
    submitNum: 0,
    acceptedNum: 0,
    isDeleted: false,
  });
};

export const getProblemByIdAction = async (
  id: number,
): Promise<ProblemVO | undefined> => {
  const problem = await problemRepo.getProblemById(id);
  if (!problem) return undefined;

  return {
    id: problem.id,
    title: problem.title,
    content: problem.content,
    tags: problem.tags ?? undefined,
    submitNum: problem.submitNum,
    acceptedNum: problem.acceptedNum,
    userId: problem.userId,
    createdAt: problem.createdAt.toISOString(),
    updatedAt: problem.updatedAt.toISOString(),
  };
};

export const getProblemsAction = async (
  limit?: number,
  offset?: number,
): Promise<ProblemVO[]> => {
  const problems = await problemRepo.getProblems(limit, offset);

  return problems.map((problem) => ({
    id: problem.id,
    title: problem.title,
    content: problem.content,
    tags: problem.tags ?? undefined,
    submitNum: problem.submitNum,
    acceptedNum: problem.acceptedNum,
    userId: problem.userId,
    createdAt: problem.createdAt.toISOString(),
    updatedAt: problem.updatedAt.toISOString(),
  }));
};

export const updateProblemAction = async (
  id: number,
  problem: ProblemDTO,
): Promise<boolean> => {
  return await problemRepo.updateProblem(id, problem);
};

export const deleteProblemAction = async (id: number): Promise<boolean> => {
  return await problemRepo.deleteProblem(id);
};

export const incrementSubmitCountAction = async (
  problemId: number,
): Promise<boolean> => {
  return await problemRepo.incrementSubmitCount(problemId);
};

export const incrementAcceptedCountAction = async (
  problemId: number,
): Promise<boolean> => {
  return await problemRepo.incrementAcceptedCount(problemId);
};
