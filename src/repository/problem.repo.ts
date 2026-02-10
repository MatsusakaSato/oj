"use server";
import { client } from "@/schema/db.client";
import {
  problemTable,
  ProblemInsertModel,
  ProblemSelectModel,
} from "@/schema/problem.schema";
import { eq, and, sql } from "drizzle-orm";

export type ProblemBasicInfo = Pick<
  ProblemSelectModel,
  "id" | "title" | "tags"
>;

export const createProblem = async (problem: ProblemInsertModel) => {
  const [result] = await client.insert(problemTable).values(problem);
  return result.affectedRows > 0;
};

export const getProblemById = async (id: number) => {
  return await client.query.problemTable.findFirst({
    where: and(eq(problemTable.id, id), eq(problemTable.isDeleted, false)),
  });
};

export const getProblems = async (
  limit?: number,
  offset?: number,
): Promise<ProblemBasicInfo[]> => {
  return await client.query.problemTable.findMany({
    where: eq(problemTable.isDeleted, false),
    columns: {
      id: true,
      title: true,
      tags: true,
    },
    limit,
    offset,
  });
};

export const getProblemsCount = async (): Promise<number> => {
  const result = await client
    .select({ count: sql<number>`count(*)` })
    .from(problemTable)
    .where(eq(problemTable.isDeleted, false));
  return result[0]?.count || 0;
};
export const getProblemByTitle = async (title: string) => {
  return await client.query.problemTable.findFirst({
    where: and(eq(problemTable.title, title), eq(problemTable.isDeleted, false)),
  });
};
export const updateProblem = async (
  id: number,
  problem: Partial<ProblemInsertModel>,
) => {
  const [result] = await client
    .update(problemTable)
    .set(problem)
    .where(and(eq(problemTable.id, id), eq(problemTable.isDeleted, false)));

  return result.affectedRows > 0;
};

export const deleteProblem = async (id: number) => {
  const [result] = await client
    .update(problemTable)
    .set({ isDeleted: true })
    .where(and(eq(problemTable.id, id), eq(problemTable.isDeleted, false)));

  return result.affectedRows > 0;
};

export const incrementSubmitCount = async (problemId: number) => {
  const [result] = await client
    .update(problemTable)
    .set({
      submitNum: sql`${problemTable.submitNum} + 1`,
    })
    .where(
      and(eq(problemTable.id, problemId), eq(problemTable.isDeleted, false)),
    );

  return result.affectedRows > 0;
};

export const incrementAcceptedCount = async (problemId: number) => {
  const [result] = await client
    .update(problemTable)
    .set({
      acceptedNum: sql`${problemTable.acceptedNum} + 1`,
    })
    .where(
      and(eq(problemTable.id, problemId), eq(problemTable.isDeleted, false)),
    );

  return result.affectedRows > 0;
};
