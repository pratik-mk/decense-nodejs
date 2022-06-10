const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Token = require("../models/token");

const lives = 5;

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello DecenSE",
  });
});

// create a post request to create a new token
router.post("/createToken", (req, res) => {
  const token = new Token({
    mint_id: req.body.mint_id,
    token_name: req.body.token_name,
    shopkeeper_pubkey: req.body.shopkeeper_pubkey,
    market_valuation: req.body.market_valuation,
    token_supply: req.body.token_supply,
    skeeper_state: req.body.skeeper_state,
    pda: req.body.pda,
    user_ata: req.body.user_ata,
    pda_ata: req.body.pda_ata,
  });
  token
    .save()
    .then(() => {
      res.status(201).json({
        message: "Token created successfully",
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

// create get request to retrieve all tokens
router.get("/getAllToken", (req, res) => {
  Token.find()
    .then((tokens) => {
      res.status(200).json({
        message: "All Tokens fetched successfully",
        tokens: tokens,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

// create get request to retrieve a token by token_name
router.get("/:token_name", (req, res) => {
  Token.findOne({ token_name: req.params.token_name })
    .then((token) => {
      res.status(200).json({
        message: "Token fetched successfully",
        token: token,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

module.exports = router;
