"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { ProblemBasicInfo } from "@/repository/problem.repo";
import Link from "next/link";

export const columns: ColumnDef<ProblemBasicInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 50,
  },
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
  },
  {
    accessorKey: "title",
    header: "标题",
    size: 150,
    cell: ({ row }) => {
      const problem = row.original;
      return (
        <Link
          href={`/problem/${problem.id}`}
          target="_blank"
          className="hover:text-blue-800 hover:underline font-medium truncate"
        >
          {problem.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "标签",
    size: 150,
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[] | null;
      if (!tags || tags.length === 0) {
        return <span className="text-gray-500">-</span>;
      }

      const getTagColor = (tag: string) => {
        switch (tag) {
          case "简单":
            return "bg-green-100 text-green-700";
          case "中等":
            return "bg-yellow-100 text-yellow-700";
          case "困难":
            return "bg-red-100 text-red-700";
          default:
            return "bg-blue-100 text-blue-700";
        }
      };

      return (
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "操作",
    size: 100,
    cell: ({ row }) => {
      const problem = row.original;
      return (
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => {
              console.log("编辑题目:", problem.id);
            }}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => {
              console.log("删除题目:", problem.id);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
