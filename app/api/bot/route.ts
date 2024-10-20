import { webhookCallback } from "grammy";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import bot from "@/services/telegram/bot";

export const POST = webhookCallback(bot, "std/http");
