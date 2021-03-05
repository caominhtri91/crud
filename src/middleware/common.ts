import parser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import express, { Router } from 'express';
import path from 'path';

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleLogging = (router: Router) => router.use(morgan('combined'));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(express.static(path.join(__dirname + './../../', 'public')));
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleSec = (router: Router) => router.use(helmet());

export const handleCompression = (router: Router) => {
  router.use(compression());
};
