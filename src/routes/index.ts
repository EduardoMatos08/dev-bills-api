import type { FastifyInstance } from "fastify";

async function routes(fastify: FastifyInstance): Promise<void> {
	// ROTAS
	fastify.get("/health", async () => {
		return {
			status: "Ok.",
			message: "DevBills working.",
		};
	});
}

export default routes;
