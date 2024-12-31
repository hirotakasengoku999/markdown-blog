import { Typography, Paper, Chip, Divider, TextField, Button } from '@mui/material';

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Article Title
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        By Author Name • Date
      </Typography>
      <div>
        {['Tag1', 'Tag2', 'Tag3'].map((tag) => (
          <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
        ))}
      </div>
      <Typography variant="body1" sx={{ mt: 4 }}>
        Article content rendered from Markdown...
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {[1, 2, 3].map((comment) => (
        <Paper key={comment} elevation={1} sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle2">
            Commenter Name • Date
          </Typography>
          <Typography variant="body2">
            Comment content...
          </Typography>
        </Paper>
      ))}
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        placeholder="Write a comment..."
        sx={{ mt: 2 }}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Post Comment
      </Button>
    </Paper>
  )
}