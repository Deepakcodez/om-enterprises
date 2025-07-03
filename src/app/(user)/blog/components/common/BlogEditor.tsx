"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { BubbleMenu, FloatingMenu } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";

import "../common/blogeditor.css";

const Tiptap = () => {
  const limit = 1000;
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable included heading to configure our own
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      CharacterCount.configure({
        limit,
      }),
      TaskItem.configure({
        nested: true,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
    ],
    content: `
      <h2>Welcome to your editor</h2>
      <p>Start writing here...</p>
    `,
    autofocus: true,
    editable: true,
    injectCSS: false,
  });

  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0;

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-editor">
      {editor && (
        <>
          <div className="menu-bar">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              Underline
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              Strike
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={editor.isActive("highlight") ? "is-active" : ""}
            >
              Highlight
            </button>

            <select
              value={editor.getAttributes("heading").level}
              onChange={(e) => {
                const level = parseInt(e.target.value);
                editor.chain().focus().toggleHeading({ level }).run();
              }}
            >
              <option value="0">Normal text</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
            </select>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              Bullet List
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "is-active" : ""}
            >
              Ordered List
            </button>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "is-active" : ""}
            >
              Task List
            </button>

            <button
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              }
            >
              Insert Table
            </button>
            <button
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              disabled={!editor.can().addColumnAfter()}
            >
              Add Column
            </button>
            <button
              onClick={() => editor.chain().focus().addRowAfter().run()}
              disabled={!editor.can().addRowAfter()}
            >
              Add Row
            </button>
            <button
              onClick={() => editor.chain().focus().deleteTable().run()}
              disabled={!editor.can().deleteTable()}
            >
              Delete Table
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              Left
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              Center
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              Right
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={
                editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
              }
            >
              Justify
            </button>

            <button
              onClick={() => {
                const url = window.prompt("Enter the URL of the image:");
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run();
                }
              }}
            >
              Add Image
            </button>

            <button
              onClick={() => {
                const previousUrl = editor.getAttributes("link").href;
                const url = window.prompt("URL", previousUrl);

                if (url === null) return;
                if (url === "") {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .unsetLink()
                    .run();
                  return;
                }

                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .setLink({ href: url })
                  .run();
              }}
              className={editor.isActive("link") ? "is-active" : ""}
            >
              Link
            </button>

            <input
              type="color"
              onInput={(e) =>
                editor.chain().focus().setColor(e.currentTarget.value).run()
              }
              value={editor.getAttributes("textStyle").color || "#000000"}
            />
          </div>

          {/* Bubble menu appears when selecting text */}
          {editor && (
            <BubbleMenu editor={editor}>
              <div className="bubble-menu">
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={editor.isActive("bold") ? "is-active" : ""}
                >
                  Bold
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={editor.isActive("italic") ? "is-active" : ""}
                >
                  Italic
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleLink().run()}
                  className={editor.isActive("link") ? "is-active" : ""}
                >
                  Link
                </button>
              </div>
            </BubbleMenu>
          )}

          {/* Floating menu appears when there's no text */}
          {editor && (
            <FloatingMenu editor={editor}>
              <div className="floating-menu">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                  }
                >
                  H1
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={editor.isActive("bulletList") ? "is-active" : ""}
                >
                  List
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleTaskList().run()}
                  className={editor.isActive("taskList") ? "is-active" : ""}
                >
                  Task
                </button>
              </div>
            </FloatingMenu>
          )}
          <div className="h-[45rem] overflow-y-scroll">
          <EditorContent editor={editor} />
          </div>

          <div className="absolute  right-12 top-34">
            <div
              className={`character-count ${
                editor.storage.characterCount.characters() === limit
                  ? "character-count--warning"
                  : ""
              }`}
            >
              <svg height="20" width="20" viewBox="0 0 20 20">
                <circle r="10" cx="10" cy="10" fill="#e9ecef" />
                <circle
                  r="5"
                  cx="10"
                  cy="10"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
                  transform="rotate(-90) translate(-20)"
                />
                <circle r="6" cx="10" cy="10" fill="white" />
              </svg>
              {editor.storage.characterCount.characters()} / {limit} characters
              <br />
              {editor.storage.characterCount.words()} words
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tiptap;
