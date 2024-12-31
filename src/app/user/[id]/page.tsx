import { Typography, Avatar, Grid, Card, CardContent } from '@mui/material';
import Link from 'next/link';

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Avatar sx={{ width: 100, height: 100, mb: 2 }}>U</Avatar>
        <Typography variant="h4" gutterBottom>
          Username
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          user@example.com
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          User's Posts
        </Typography>
      </Grid>
      {[1, 2, 3].map((post) => (
        <Grid item xs={12} md={6} key={post}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                <Link href={`/post/${post}`} passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                    Article Title {post}
                </Link>
              </Typography>
              <Typography color="text.secondary">
                Date
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}