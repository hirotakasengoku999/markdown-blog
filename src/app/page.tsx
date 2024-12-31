import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search articles..."
          InputProps={{
            endAdornment: (
              <Button variant="contained" color="primary">
                Search
              </Button>
            ),
          }}
        />
      </Grid>
      {[1, 2, 3, 4, 5].map((post) => (
        <Grid item xs={12} md={6} key={post}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                <Link href={`/post/${post}`} passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                  Article Title {post}
                </Link>
              </Typography>
              <Typography color="text.secondary">
                Author Name • Date
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Preview of the article content...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}