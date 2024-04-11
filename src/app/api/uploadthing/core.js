import { auth } from "@clerk/nextjs";
import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async() => {
    const { userId } = await auth();
    if(!userId) throw new Error("Unauthorized");
    return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    courseImage: f({image: { maxFileCount: 1, maxFileSize: "4MB", maxFileCount: 1}})
        .middleware(()=>handleAuth())
        .onUploadComplete(()=>{}),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(()=>handleAuth())
        .onUploadComplete(()=>{}),
    chapterVideo: f({video: { maxFileCount: 1, maxFileSize: "512GB"}})
        .middleware(()=>handleAuth())
        .onUploadComplete(()=>{})
};

// module.exports = {ourFileRouter}