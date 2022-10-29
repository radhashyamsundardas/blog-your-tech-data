const router = require('express').Router();
const sequelize = require('../config/connection');
const {comment, post, user} = require('../models');
const withAuth = require('../utils/auth');