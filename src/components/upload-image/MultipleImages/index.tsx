import { type SetStateAction, type Dispatch, useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { CloudLightning, ImagePlus } from "lucide-react";

import type {
  ImageListType,
  onChangeImage,
  IUploadImage,
  IUploadImageProps,
  IImage,
} from "../..";
import { compressImage } from "../handleCompressionImage";
import { convertBytes } from "../../../lib/utils";
import { cn } from "../../../lib/utils";

import { Button, Label } from "../../../components";
import { MultiUploadImageActions } from "./Actions";
import { LoadMultiImages } from "./LoadImage";
import { D4TImage } from "../../image";

interface IMultipleUploadImageProps
  extends Omit<IUploadImageProps, "setUploadImage" | "initialPreview"> {
  setUploadImages: Dispatch<SetStateAction<IUploadImage[]>>;
  initialPreview?: IImage[];
}

export const MultipleImages = (props: IMultipleUploadImageProps) => {
  const { edit = true, label, setUploadImages, format, uploadLabel, tabIndexs, emptyClassName, imageContainerClassName, zoom, compress, limit, initialPreview, disabled, download, onRemove, onEdit } = props
  const [localImage, setLocalImage] = useState<ImageListType>([]);

  useEffect(() => {
    if (initialPreview && initialPreview.length) {
      setLocalImage([...initialPreview]); // Reemplazar las imágenes locales con las imágenes iniciales
    }
  }, [initialPreview]);

  const onChangeImage: onChangeImage = async (imageList, addUpdateIndex) => {
    setLocalImage(imageList)

    const imageListFormated = imageList.map(async (image) => {
      if (compress?.resizer && image?.file) {
        const { data_url: compressedUrl, file: compressedFile } = await compressImage({
          resizer: compress?.resizer,
          imageFile: image?.file,
          quality: format?.quality || 10,
          maxWidth: format?.width || 500,
          maxHeight: format?.width || 500,
          compressFormat: format?.extension || "png",
          rotation: format?.rotation || 0,
        });

        const compreesedSize = convertBytes(compressedFile?.size)

        return {
          original: {
            preview: image?.data_url as string,
            file: image?.file,
            size: {
              formated: image?.file?.size ? convertBytes(image?.file?.size) : null,
              bytes: image?.file?.size || null,
            },
          },
          compressed: {
            preview: compressedUrl?.toString() as string,
            file: compressedFile,
            size: {
              formated: compreesedSize,
              bytes: compressedFile?.size,
            },
          },
        };
      }

      return null
    });

    if (onEdit && addUpdateIndex) {
      const currentImageUpdated = imageList[addUpdateIndex[0]]

      currentImageUpdated?.data_url && onEdit({
        data_url: currentImageUpdated?.data_url as string || null,
        file: currentImageUpdated?.file || null,
      })
    }

    Promise.all(imageListFormated).then(imageResolved => {
      console.log({ imageResolved })
      imageResolved[0] !== null && setUploadImages(imageResolved)
    });
  };

  const handleOnRemoveImage = (idxImageRemoved: number) => {
    if (idxImageRemoved === undefined || idxImageRemoved === null || !localImage || !localImage.length) {
      return
    }

    onRemove && onRemove(localImage[idxImageRemoved])
  }

  return (
    <div>
      {label && <Label>{label}</Label>}

      <div className="my-2"></div>

      <ImageUploading
        multiple
        value={localImage}
        dataURLKey="data_url"
        onChange={onChangeImage}
        acceptType={["webp", "png", "jpeg", "jpg"]}
        maxNumber={limit}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => {
          return (
            <>
              {imageList.length >= 1 ? (
                <div
                  className={`grid ${
                    limit === 1 || !limit ? "grid-cols-1" : "grid-cols-2"
                  } grid-flow-row gap-4`}
                >
                  {imageList.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="imagen-container w-full flex flex-col justify-center items-center relative"
                      >
                        <D4TImage
                          zoom={zoom}
                          src={image?.data_url}
                          containerClassName={imageContainerClassName}
                        />

                        <MultiUploadImageActions
                          edit={edit}
                          imageIndex={index}
                          download={download}
                          compress={compress}
                          disabled={disabled}
                          tabIndexs={tabIndexs}
                          src={image?.data_url}
                          onImageRemove={onImageRemove}
                          onImageUpdate={onImageUpdate}
                          handleOnRemoveImage={handleOnRemoveImage}
                        />
                      </div>
                    );
                  })}

                  {localImage.length < limit && (
                    <div className="imagen-container">
                      <div
                        {...dragProps}
                        className={cn(
                          `w-full h-[237px] ${
                            isDragging ? "border-indigo-600" : "border-muted-foreground"
                          } flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                          imageContainerClassName
                        )}
                      >

                        <Button
                          size='icon'
                          type='button'
                          variant='outline'
                          tabIndex={tabIndexs?.upload}
                          disabled={disabled}
                          className={`mt-2 ${isDragging && 'text-indigo-600'}`} onClick={onImageUpload}
                        >
                          <ImagePlus size={24} />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <LoadMultiImages
                  dragProps={dragProps}
                  emptyClassName={emptyClassName}
                  isDragging={isDragging}
                  onImageUpload={onImageUpload}
                  tabIndexs={tabIndexs}
                  uploadLabel={uploadLabel}
                  disabled={disabled}
                />
              )}
            </>
          );
        }}
      </ImageUploading>
    </div>
  );
};
