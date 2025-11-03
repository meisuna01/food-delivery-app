import User from "../Models/user";
import bcrypt from "bcryptjs";


// signup
export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
     // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        
        const hashedPassword = await bcrypt.hash(password, 10);
     // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
    }
     catch (error) {
        console.error("Error during signup:", error);
}
 
    res.status(201).json({ message: "User created successfully" });

}


// login
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check password

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // generate JWT token (optional, if you want to implement token-based authentication)

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // store token in cookies

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax", // Adjust based on your requirements
            maxAge: 604800000, // 7 days
        });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

    res.status(200).json({ message: "Login successful", token });

}


// forgot password

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate password reset token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "10m",
        });

        //nodemailer with mailtrap
       const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "c632a81a4ae674",
                pass: "****e469"
            }
            });

        // Send email with reset link
       const mailOptions = {
           from: "noreply@example.com",
           to: user.email,
           subject: "Password Reset",
           text: `Click the link to reset your password: ${process.env.FRONTEND_URL}/reset-password?token=${token}`,
       };

        await transport.sendMail(mailOptions);

    } catch (error) {
        console.error("Error during password reset:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

    res.status(200).json({ message: "Password reset email sent" });
}

// reset password

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // Find user by ID
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }

    res.status(200).json({ message: "Password reset successful" });
}
