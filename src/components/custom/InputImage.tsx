"use client";
import React, { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const InputImage = () => {
  const [preview, setpreview] = useState("");
  const [base64, setbase64] = useState<string>("");
  const ImgRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setbase64(reader.result as string);
        console.log("image changed 🙌");
        
      };
      reader.readAsDataURL(file);
      setpreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="flex p-3 justify-between h-full">
      <Label className="w-[30%] h-full align-middle ">
        <p className="p-3">Event Banner</p>
      </Label>
      <Input
        type="file"
        className="hidden"
        required
        ref={ImgRef}
        onChange={handleImageChange}
      />
      <Input type="text" name="eventBanner" value={base64} className="hidden" onChange={handleImageChange}
       />
      {preview ? (
        <div className="flex flex-col p-2 gap-y-2 items-center">
          <Image
            src={preview}
            width={100}
            height={100}
            alt="Banner Image"
            className="w-3/4 rounded-xl"
          />
          <Button
            type="button"
            className="border w-fit"
            onClick={() => {
              ImgRef.current?.click();
            }}
          >
            Change Image
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => {
            ImgRef.current?.click();
          }}
        >
          Select Image
        </Button>
      )}
    </div>
  );
};

export default InputImage;
