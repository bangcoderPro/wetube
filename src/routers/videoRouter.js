import express from "express";
import routes from "../../routes";
import {
  videos,
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../../middlewares";

const videoRouter = express.Router();
// console.log(routes.editVideo(1122));
// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
