import { Telegraf, Markup } from "telegraf";
import { eq, desc, sql, and } from "drizzle-orm";
import {
  db,
  depositMethodsTable,
  depositRequestsTable,
  productOverridesTable,
  categoryOverridesTable,
  ordersTable,
  broadcastsTable,
  usersTable,
  contactLinksTable,
  virtualCategoriesTable,
  manualProductsTable,
  manualOrdersTable,
} from "./db.js"; // بدل @workspace/db

import { setStep, getStep } from "./state.js"; // بدل ../state
import { callAiSupport, clearAiHistory, hasAiKey } from "./ai-support.js";
import {
  getAdminPassword,
  setSetting,
  getSetting,
  getMarkupPercent,
  getSocialMarkupPercent,
  getExchangeRate,
  getBotStatus,
} from "./settings.js"; // بدل ../settings

import {
  ensureUser,
  ADMIN_USERNAME,
} from "./start.js"; // بدل ./start صح
import {
  getUser,
  setAdmin,
  setStatus,
  adjustBalance,
  setBalance,
  listUsers,
  countUsers,
  searchUser,
  markAdminAuthed,
} from "./users.js"; // بدل ../users

import { sendOrEdit, clearInlineKeyboard } from "./tg.js"; // بدل ../tg
import { invalidateCaches } from "./categories.js"; // بدل ./categories صح
import { logger } from "../lib/logger.js"; // هاد برا workspace

// باقي الكود تبعك نفسه... حط كل الدوال اللي بعتهن تحت هون
// ... الكود تبعك من const ADMIN_USERNAMES_LOWER لآخر سطر ...
