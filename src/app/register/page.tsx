import { TextField, Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <form>
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          sx={{ mb: 2 }}
        />
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
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          type="password"
          sx={{ mb: 2 }}
        />
        <Button fullWidth variant="contained" color="primary" sx={{ mb: 2 }}>
          Register
        </Button>
      </form>
      <Typography variant="body2">
        Already have an account? <Link href="/login">Login here</Link>
      </Typography>
    </Paper>
  )
}