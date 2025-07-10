'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import { BubbleMenu, FloatingMenu } from '@tiptap/react'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'
import { useEffect } from 'react'

import './blogeditor.css'
import { FaBold, FaItalic, FaUnderline, FaCode } from 'react-icons/fa'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Link2,
  Scissors,
  Table2,
  Trash
} from 'lucide-react'
import { BsHighlighter } from 'react-icons/bs'
import { PiListBullets } from 'react-icons/pi'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { IoCheckbox } from 'react-icons/io5'
import { MdPhoto } from 'react-icons/md'

const lowlight = createLowlight(common)

const Tiptap = ({
  content = '<h2 style="color: black;">Welcome to your editor</h2> <p>Start writing here...</p>',
  setContent
}: {
  content?: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}) => {
  const limit = 100000

  const FontSize = TextStyle.extend({
    addAttributes () {
      return {
        ...this.parent?.(),
        fontSize: {
          default: null,
          parseHTML: element => element.style.fontSize,
          renderHTML: attributes => {
            if (!attributes.fontSize) return {}
            return { style: `font-size: ${attributes.fontSize}` }
          }
        }
      }
    },
    addCommands () {
      return {
        ...this.parent?.(),
        setFontSize:
          (fontSize: string) =>
          ({ chain }: { chain: any }) => {
            return chain().setMark('textStyle', { fontSize }).run()
          },
        unsetFontSize:
          () =>
          ({ chain }: { chain: any }) => {

            return chain()
              .setMark('textStyle', { fontSize: null })
              .removeEmptyTextStyle()
              .run()
          }
      }
    }
  })

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        codeBlock: false // Disable default code block to configure our own
      }),
      FontSize,

      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript'
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6]
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'bullet-list'
        }
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'ordered-list'
        }
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: 'list-item'
        }
      }),
      TaskList,
      CharacterCount.configure({
        limit
      }),
      TaskItem.configure({
        nested: true
      }),
      Image.configure({
        inline: true,
        allowBase64: true
      }),
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image']
      }),
      Link.configure({
        openOnClick: false
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true
      }),
      Underline
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl dark:prose-invert'
      }
    },
    autofocus: true,
    editable: true,
    injectCSS: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setContent(html)
    }
  })

  const percentage = editor
    ? Math.round((100 / limit) * editor.storage.characterCount.characters())
    : 0

  // Initialize content state
  useEffect(() => {
    if (editor) {
      setContent(editor.getHTML())
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className='tiptap-editor'>
      {editor && (
        <>
          <div className='menu-bar'>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            >
              <FaBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              <FaItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'is-active' : ''}
            >
              <FaUnderline />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              <Scissors />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={editor.isActive('highlight') ? 'is-active' : ''}
            >
              <BsHighlighter />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
              <FaCode />
            </button>

            <select
              value={editor.getAttributes('heading').level || '0'}
              onChange={e => {
                const level = parseInt(e.target.value)
                if (level === 0) {
                  editor.chain().focus().setParagraph().run()
                } else {
                  editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })
                    .run()
                }
              }}
            >
              <option value='0'>Normal text</option>
              <option value='1'>Heading 1</option>
              <option value='2'>Heading 2</option>
              <option value='3'>Heading 3</option>
            </select>

            <select
              value={editor.getAttributes('textStyle').fontSize || ''}
              onChange={e => {
                const size = e.target.value
                if (size) {
                  editor.chain().focus().setMark('textStyle', { fontSize: size }).run()
                } else {
                  editor.chain().focus().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run()
                }
              }}
              className='text-sm p-1 border rounded'
            >
              <option value=''>Size</option>
              <option value='12px'>Small</option>
              <option value='16px'>Normal</option>
              <option value='30px'>Large</option>
              <option value='44px'>XL</option>
              <option value='52px'>XXL</option>
            </select>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              <PiListBullets />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
              <AiOutlineOrderedList />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive('taskList') ? 'is-active' : ''}
            >
              <IoCheckbox />
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
              <Table2 />
            </button>
            <button
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              disabled={!editor.can().addColumnAfter()}
            >
              + Column
            </button>
            <button
              onClick={() => editor.chain().focus().addRowAfter().run()}
              disabled={!editor.can().addRowAfter()}
            >
              + Row
            </button>
            <button
              className='flex items-center gap-1'
              onClick={() => editor.chain().focus().deleteTable().run()}
              disabled={!editor.can().deleteTable()}
            >
              <Trash size={15} /> Table
            </button>

            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={
                editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
              }
            >
              <AlignLeft />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign('center').run()
              }
              className={
                editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
              }
            >
              <AlignCenter />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={
                editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
              }
            >
              <AlignRight />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign('justify').run()
              }
              className={
                editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
              }
            >
              <AlignJustify />
            </button>

            <button
              onClick={() => {
                const url = window.prompt('Enter the URL of the image:')
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run()
                }
              }}
            >
              <MdPhoto />
            </button>

            <button
              onClick={() => {
                const previousUrl = editor.getAttributes('link').href
                const url = window.prompt('URL', previousUrl)

                if (url === null) return
                if (url === '') {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .run()
                  return
                }

                editor
                  .chain()
                  .focus()
                  .extendMarkRange('link')
                  .setLink({ href: url })
                  .run()
              }}
              className={editor.isActive('link') ? 'is-active' : ''}
            >
              <Link2 />
            </button>

            <input
              type='color'
              onInput={e =>
                editor.chain().focus().setColor(e.currentTarget.value).run()
              }
              value={editor.getAttributes('textStyle').color || '#000000'}
            />
          </div>

          {/* Bubble menu appears when selecting text */}
          {editor && (
            <BubbleMenu editor={editor}>
              <div className='bubble-menu'>
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={editor.isActive('bold') ? 'is-active' : ''}
                >
                  Bold
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={editor.isActive('italic') ? 'is-active' : ''}
                >
                  Italic
                </button>
                <button
                  onClick={() => {
                    const previousUrl = editor.getAttributes('link').href
                    const url = window.prompt('URL', previousUrl)

                    if (url === null) return
                    if (url === '') {
                      editor
                        .chain()
                        .focus()
                        .extendMarkRange('link')
                        .unsetLink()
                        .run()
                      return
                    }

                    editor
                      .chain()
                      .focus()
                      .extendMarkRange('link')
                      .setLink({ href: url })
                      .run()
                  }}
                  className={editor.isActive('link') ? 'is-active' : ''}
                >
                  Link
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  className={editor.isActive('code') ? 'is-active' : ''}
                >
                  Code
                </button>
              </div>
            </BubbleMenu>
          )}

          {/* Floating menu appears when there's no text */}
          {editor && (
            <FloatingMenu editor={editor}>
              <div className='floating-menu'>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className={
                    editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
                  }
                >
                  H1
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                  Bullet List
                </button>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                  Ordered List
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                  className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                  Code Block
                </button>
              </div>
            </FloatingMenu>
          )}
          <div className='h-auto overflow-y-scroll scrollbar-hide text-black'>
            <EditorContent editor={editor}  className="tiptap" />
          </div>

          <div className='absolute left-12 top-34 lg:block hidden'>
            <div
              className={`character-count ${
                editor.storage.characterCount.characters() === limit
                  ? 'character-count--warning'
                  : ''
              }`}
            >
              <svg height='20' width='20' viewBox='0 0 20 20'>
                <circle r='10' cx='10' cy='10' fill='#e9ecef' />
                <circle
                  r='5'
                  cx='10'
                  cy='10'
                  fill='transparent'
                  stroke='currentColor'
                  strokeWidth='10'
                  strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
                  transform='rotate(-90) translate(-20)'
                />
                <circle r='6' cx='10' cy='10' fill='white' />
              </svg>
              {editor.storage.characterCount.characters()} / {limit} characters
              <br />
              {editor.storage.characterCount.words()} words
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Tiptap
