import { useState } from "react";
import Cropper from "react-easy-crop";
import CropUtility from "./CropUtility";
import Modal from "@/Ui/Modal/Modal";
import style from "./ImageCrop.module.css";
const ImageCrop = ({
  widthRatio,
  heightRatio,
  fileUrl,
  setFileUrl,
  onFileBlob,
  onClose,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    try {
      const { file, url } = await CropUtility(
        fileUrl,
        croppedAreaPixels,
        rotation
      );
      setFileUrl(url);
      onFileBlob(file);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      customOverlayStyle={{
        border: "none",
        borderRadius: "0",
      }}
    >
      <div className={style.image_crop}>
        <div className={style.crop_container}>
          <Cropper
            image={fileUrl}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={widthRatio / heightRatio}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            onCropComplete={cropComplete}
          />
        </div>
        <div className={style.crop_action}>
          <h6 onClick={() => onClose("")} className={style.crop_action_cancel}>
            cancel
          </h6>
          <h6 onClick={cropImage} className={style.crop_action_crop}>
            crop
          </h6>
        </div>
      </div>
    </Modal>
  );
};

export default ImageCrop;
