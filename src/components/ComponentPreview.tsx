import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import CodeBlock from "./CodeBlock";

interface ComponentPreviewProps {
  preview: ReactNode;
  code: string;
}

export default function ComponentPreview({ preview, code }: ComponentPreviewProps) {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden">
      <Tabs defaultValue="preview">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview">
          <div className="p-8 flex items-center justify-center min-h-[300px] bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
            {preview}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="p-4">
            <CodeBlock code={code} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}