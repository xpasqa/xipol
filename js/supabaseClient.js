import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://zpniygdnkrrgllgxfjiv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwbml5Z2Rua3JyZ2xsZ3hmaml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ4NDQsImV4cCI6MjA2MzA3MDg0NH0.zRa40N2t-uENazXYk46O0WJoOhAzk5McKmapofv5Lpk'
)
