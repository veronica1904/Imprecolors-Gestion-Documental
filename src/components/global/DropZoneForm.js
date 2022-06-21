import React from "react";
import { Controller } from "react-hook-form";
import { DropzoneArea } from "react-mui-dropzone";

function DropZoneForm(props) {
  const { control, name, label,type='all',...otherProps } = props;
  const optionsTypeFiles = {
    all: "", // all files
    images: "image/jpeg,image/png,image/gif,image/jpg", // only images
    documents: ".doc, .docx, .pdf, .xls, .xlsx" // only documents
    }

  return (
    <div>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <DropzoneArea
                  value={value}
                  onChange={onChange}
                  dropzoneText={label}
                  showAlerts={["error"]}
                  acceptedFiles={[optionsTypeFiles[type]]}
                  maxFileSize={10000000}
                  getDropRejectMessage={() => {
                    return "Lo siento el archivo seleccionado no es válido";
                  }}
                  getFileAddedMessage={() => {
                    return "Archivo agregado correctamente";
                  }}
                  getFileRemovedMessage={() => {
                    return "Archivo eliminado";
                  }}
                />
              </>
            )}
            {...otherProps}
            />
    </div>
  );
}

export default DropZoneForm;
