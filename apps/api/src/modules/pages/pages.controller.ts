import { getAuth } from "@clerk/express";
import { pageService } from "./pages.service.js";
import { getUser } from "../../utils/getUser.js";
import { CreatePageDto } from "./dto/create-page.dto.js";

export async function getPages(req: any, res: any) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const user = await getUser(userId)
  const pages = await pageService.getPages(user.id)
  
  return res.json({ message: 'Get all pages', data: pages });
}

export async function createPage(req: any, res: any) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await getUser(userId)

  const { title, authorId, content, slug, published }: CreatePageDto = req.body;

  const data = {
    title,
    slug,
    content,
    authorId,
    published
   }

   const createdPage = await pageService.createPage(data, user.id)

  return res.json({message: "Page created>..!! ", data: createdPage})
}