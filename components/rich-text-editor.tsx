"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { Button } from "@/components/ui/button"
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  LinkIcon,
  UnlinkIcon,
  Heading1Icon,
  Heading2Icon,
  QuoteIcon,
  CodeIcon,
  MinusIcon,
} from "lucide-react"

interface RichTextEditorProps {
  content: string
  onContentChange: (content: string) => void
}

export function RichTextEditor({ content, onContentChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: "border-l-4 border-gray-300 pl-4 italic",
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: "bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto",
          },
        },
        code: {
          HTMLAttributes: {
            class: "bg-gray-200 px-1 py-0.5 rounded text-sm font-mono",
          },
        },
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: "font-bold text-[#1e2c49]",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "leading-relaxed mb-4",
          },
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-[#d4b26a] underline hover:no-underline",
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "prose max-w-none border rounded-md p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#d4b26a] overflow-auto",
      },
    },
  })

  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty string was set
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  return (
    <div className="border rounded-md">
      <div className="flex flex-wrap gap-1 p-2 border-b">
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Bold"
        >
          <BoldIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Italic"
        >
          <ItalicIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Bullet List"
        >
          <ListIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          variant={editor.isActive("orderedList") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Ordered List"
        >
          <ListOrderedIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          variant={editor.isActive("heading", { level: 1 }) ? "secondary" : "ghost"}
          size="icon"
          aria-label="Heading 1"
        >
          <Heading1Icon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          variant={editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"}
          size="icon"
          aria-label="Heading 2"
        >
          <Heading2Icon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          variant={editor.isActive("blockquote") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Blockquote"
        >
          <QuoteIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          variant={editor.isActive("codeBlock") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Code Block"
        >
          <CodeIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={setLink}
          variant={editor.isActive("link") ? "secondary" : "ghost"}
          size="icon"
          aria-label="Set Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          variant="ghost"
          size="icon"
          aria-label="Unset Link"
        >
          <UnlinkIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          variant="ghost"
          size="icon"
          aria-label="Horizontal Rule"
        >
          <MinusIcon className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
