import express, { Request, Response } from 'express';
import { register, login } from '../controllers/authController';  // Corrected import without '.js'

const router = express.Router();

// Register Route
router.post('/register', async (req: Request, res: Response) => {
  await register(req, res); // Call the register controller
});

// Login Route
router.post('/login', async (req: Request, res: Response) => {
  await login(req, res);  // Call the login controller
});

const authRoutes = router;
export default authRoutes;
