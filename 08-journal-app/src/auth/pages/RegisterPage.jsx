import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="Daniel Tames"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have account?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
