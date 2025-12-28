# 🎯 QUICK START - Netlify CMS Setup (5 Minutes)

## Step 1: Enable Netlify Identity (2 min)

1. Go to: https://app.netlify.com
2. Click your site: **Portfolio-wesbitew**
3. Go to: **Site settings** → **Identity**
4. Click: **Enable Identity**
5. Under Registration: Select **Invite only**
6. Scroll to Services → **Git Gateway** → Click **Enable Git Gateway**

## Step 2: Invite Your Client (1 min)

1. Go to: **Identity** tab (top menu)
2. Click: **Invite users**
3. Enter client's email
4. Click: **Send**
5. Done! They'll receive an invitation email

## Step 3: Client First Login (2 min)

**Client does this:**
1. Check email for invitation from Netlify
2. Click the link
3. Set a password
4. Go to: `https://yoursitename.netlify.app/admin/`
5. Login with email + password
6. Start managing photos!

---

## 📸 How Client Adds Photos

### Quick Method:
1. Login at `/admin/`
2. Click **Photos** → **New Photos**
3. Upload image or paste Cloudinary URL
4. Select category (portrait/landscape/events)
5. Choose priority (high = homepage, low = gallery only)
6. Click **Publish**
7. Wait 2-3 minutes → Changes are LIVE! ✨

### Priority System:
- **High Priority** = Shows on homepage (6 per category on mobile)
- **Low Priority** = Only shows in full gallery page

### Categories:
- Can select **multiple** categories
- Portrait, Landscape, Events
- Or all three!

---

## 🎨 Admin Panel Features

Your client can manage:
- ✅ **Add/Edit/Delete Photos**
- ✅ **Change Homepage Hero** (title, subtitle, background)
- ✅ **Edit About Section** (bio, profile image)
- ✅ **Update Contact Info** (email, phone, socials)

All without touching code! 🚀

---

## ⚠️ Important

After setup, test it yourself:
1. Go to `/admin/`
2. Add a test photo
3. Check if it appears in the CMS
4. Verify site rebuilds (check Netlify dashboard)

---

## 🆘 Need Help?

**Can't login?**
- Check Identity tab in Netlify dashboard
- Resend invitation

**Changes not showing?**
- Wait 2-3 minutes for rebuild
- Check Deploys tab in Netlify

**Admin page 404?**
- Site might not be deployed yet
- Check Deploys tab

---

## ✨ What's Next?

Currently, photos are managed in CMS but need manual integration.

**Want automatic photo loading from CMS?**
I can modify your JavaScript to:
- Read photos directly from CMS
- Auto-generate photo grid
- Fully automatic updates

Just say "make it automatic" and I'll implement it! 🎯
