import { TextField, Button, Paper, Chip } from '@mui/material';

export default function CreatePostPage() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Title"
        sx={{ mb: 4 }}
      />
      <TextField
        fullWidth
        multiline
        rows={15}
        variant="outlined"
        label="Content (Markdown)"
        sx={{ mb: 4 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Tags (comma separated)"
        sx={{ mb: 4 }}
      />
      <div>
        {['Tag1', 'Tag2', 'Tag3'].map((tag) => (
          <Chip key={tag} label={tag} onDelete={() => {}} sx={{ mr: 1, mb: 1 }} />
        ))}
      </div>
      <Button variant="contained" color="primary" sx={{ mr: 2 }}>
        Preview
      </Button>
      <Button variant="contained" color="secondary">
        Publish
      </Button>
    </Paper>
  )
}