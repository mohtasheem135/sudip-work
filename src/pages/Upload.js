import React, { useState } from "react";
import axios from "axios";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import Error from "./error";

const Upload = ({ session }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState(null);
  const [details, setDetails] = useState({
    title: "",
    description: "",
    type: "",
    medium: "",
    price: "",
    stock: "",
    date: "",
    discount: "",
    rating: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      details.title === "" ||
      details.description === "" ||
      details.type === "" ||
      details.medium === "" ||
      details.price === "" ||
      details.stock === "" ||
      details.date === "" ||
      details.discount === "" ||
      details.image === ""
    ) {
      toast({
        description: "Don't leave the fields empty!!!",
      });
      alert("Don't leave the fields empty!!!");
    } else {
      const res = await axios.post("http://localhost:4000/upload", {
        title: details.title,
        description: details.description,
        medium: details.medium,
        price: details.price,
        stock: details.stock,
        date: details.date,
        discount: details.discount,
        type: details.type,
        rating: details.rating,
        image: details.image,
      });
      console.log(res.data.message);
      if (res.data.message === "added successfully") {
        window.alert("Added successfully");
      } else {
        window.alert("Artpiece already exists in database");
      }
    }
  };

  const handleImageClick = (path) => {
    navigate(path);
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.files[0] });
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImagePreview(imageUrl);
  };
  return localStorage.getItem("session") ? (
    // <div>
    //  <h1>Please enter the details</h1>

    //  <div>Title : <input onChange={handleChange} type="text" name="title"/></div>
    //  <div>Description : <input onChange={handleChange} type="text" name="description"/></div>
    //  <div>Medium : <input type="text" name="medium" onChange={handleChange}/></div>
    //  <div>Price in rupees: <input type="number" name="price" onChange={handleChange}/></div>
    //  <div>Stock: <input type="number" name="stock" onChange={handleChange}/></div>
    //  <div>Created At in DD-MM-YYYY: <input type="text" onChange={handleChange} name="date"/></div>
    //  <div>Discount: <input type="number" onChange={handleChange} name="discount"/></div>
    //  <div>Type : <input onChange={handleChange} type="text" name="type"/></div>
    //  <div>Rating: <input type="number" onChange={handleChange} name="rating"/></div>
    //  <div>File: <input type="file" onChange={handleImage} name="image"/></div><image src={imagePreview} width={"100%"}></image>
    //   <button onClick={() => handleSubmit()} style={{ cursor: 'pointer' }}>
    //     Submit
    //   </button>

    //   <button onClick={()=>{
    //     navigate("/")
    //   }} style={{ cursor: 'pointer' }}>
    //     Logout
    //   </button>
    //  </div>

    <div className="flex items-center justify-center pt-[20px] pb-[40px]">
      <Card className="w-[450px] bg-gray-100">
        <CardHeader>
          <CardTitle>Enter the details</CardTitle>
          {/* <CardDescription>Fill the form</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Title<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="text"
                  name="title"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Description<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="text"
                  name="description"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Medium<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="text"
                  name="medium"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Price in rupees (₹)<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="price"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Stock<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="stock"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Created At in DD-MM-YYYY<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="date"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Discount<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="discount"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Type<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="type"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Rating<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleChange}
                  type="number"
                  name="rating"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Upload File<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[0px] outline-none   border-black"
                  type="file"
                  onChange={handleImage}
                  name="image"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  ) : (
    <Error />
  );
};

export default Upload;
