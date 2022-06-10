const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  mint_id: String,
  token_name: String,
  shopkeeper_pubkey: String,
  market_valuation: Number,
  token_supply: Number,
  skeeper_state: String,
  pda: String,
  user_ata: String,
  pda_ata: String,
});

module.exports = mongoose.model("token", tokenSchema, "token");
