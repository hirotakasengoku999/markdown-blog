import { TextField, Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          sx={{ mb: 2 }}
        />
        <Button fullWidth variant="contained" color="primary" sx={{ mb: 2 }}>
          Login
        </Button>
      </form>
      <Typography variant="body2">
        Don't have an account? <Link href="/register">Register here</Link>
      </Typography>
    </Paper>
  )
}