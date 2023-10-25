import { useState } from 'react';
import Head from 'next/head';
import LoginForm from '@/components/LoginForm';
import LoginPage from '../LoginPage';

import { PrismaClient, Contact, Prisma } from '@prisma/client';