"use client"

import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload({image} : {image: string | undefined}) {

  const [imageURl, setImageUrl] = useState('')

  return (
    <CldUploadWidget
      onSuccess={(result, { widget }) => {
        if(result.event === "success") {
          widget.close()
          //  @ts-ignore
          setImageUrl(result.info?.secure_url)
        }
      }}
      uploadPreset="yjhixzj4"
      options={{
        maxFiles: 1
      }}
    >
      {({open}) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Imagen Producto</label>
            <div 
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-200 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus 
                size={50}
              />
              <p className="text-lg font-semibold">Agregar Imagen</p>

              {imageURl && (
                <div
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    fill
                    style={{objectFit: 'contain'}}
                    src={imageURl}
                    alt="Imagen de producto"
                    width={8}
                    height={8}
                  />
                </div>
              )}
            </div>
          </div>

          {image && !imageURl && (
            <div className="space-y-2">
              <label>Imagen Actual :</label>
              <div className="relative w-64 h-64">
                <Image 
                  fill
                  src={getImagePath(image)}
                  alt="Imagen Producto"
                  style={{objectFit: 'contain'}}
                />
              </div>
            </div>
          )}

          <input 
            type="hidden"
            name="image"
            defaultValue={imageURl ? imageURl : image}
          />
        </>
      )}
    </CldUploadWidget>
  )
}
