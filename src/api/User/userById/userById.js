import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        // args : id가 들어올거임
        // 원하는 id 와 같은 id 를 가진 user 를 찾을거야
        userById: async (_, args) => {
            const { id } = args;
            return await prisma.user({ id });
        }
    }
}