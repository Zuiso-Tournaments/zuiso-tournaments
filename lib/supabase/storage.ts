import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { nanoid } from 'nanoid'

const BUCKET_NAME = 'zuiso-images'

type FileBody =
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Buffer
  | File
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | URLSearchParams
  | string

// Upload file using standard upload
export async function uploadFile(file:FileBody) {

  const supabase = getSupabaseBrowserClient()

  const auth = await supabase.auth.getUser()

  const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(`${auth.data.user?.id}/${nanoid()}`, file)
  if (error) {
    // Handle error
    return error
  } else {
    // Handle success
    return data
  }
}