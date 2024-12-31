import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" passHref style={{ color: 'white', textDecoration: 'none' }}>
                Markdown Blog
              </Link>
            </Typography>
            <Button color="inherit" component={Link} href="/login">Login</Button>
            <Button color="inherit" component={Link} href="/register">Register</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </body>
    </html>
  )
}