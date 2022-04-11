// const express = require('express');
const { User } = require('../models');

 const findAllUsers = async (req, res, next) => {
  try {
    const user = await User.findAll({ attributes: { exclude: 'password' } });

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const findUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: 'password' } });

    if (!user) return res.status(404).json({ message: 'User does not exist' });

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

module.exports = { findAllUsers, findUserById, createUsers };