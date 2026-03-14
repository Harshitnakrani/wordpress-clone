import { prisma } from "@wordpressclone/db";
import { CreatePageDto } from "./dto/create-page.dto.js";
class PageService {
  async getPages(id : string) {
    try {
      const pages = await prisma.page.findMany({
        where: {
          authorId: id
        }
      })
      return pages
    } catch (error) {
      console.log(error);
      
    }
  }

  async createPage(data: CreatePageDto, authorId: string) {
    try {
      const createdPage = await prisma.page.create({
        data: {  
          title: data.title,
          content: data.content,
          authorId,
          slug: data.slug,
          published: data.published
        }
      })

      return createdPage
    } catch (error) {
      console.log(error);
      
    }
  } 
}

export const pageService = new PageService()