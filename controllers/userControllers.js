// const express = require('express');
const { User } = require('../models');

 const findAllUsers = async (_req, res, next) => {
  try {
    const user = await User.findAll();

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUsers = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailRegister = await User.findOne({ where: { email } });

    if (emailRegister) {
      return res.status(409).json({ message: 'User already registered' });
    }
    
    const user = await User.create(req.body);

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllUsers, createUsers };