import PageHeader from "@/components/user/page-header";

export default function Page() {
    return (
        <div>
            <PageHeader title="Privacy Policy" />
            <p>Effective Date: 2024-09-10</p>

            <h2 className="text-lg font-semibold">1. Introduction</h2>
            <p>
                At marcialdev, we are committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and safeguard your information when
                you use our website and services. By accessing or using marcialdev, you
                agree to the terms outlined in this policy.
            </p>

            <h2 className="text-lg font-semibold">2. Information We Collect</h2>
            <p>
                We collect personal information when you use our service. Specifically,
                when you create an account using Google OAuth, we collect:
            </p>
            <ul>
                <li>Your Google account email address</li>
                <li>Your profile name and picture (if applicable)</li>
            </ul>
            <p>
                We do <strong>not</strong> collect or access your password, sensitive
                information, or any other data beyond the necessary scope of
                Google’apos;s OAuth process.
            </p>

            <h2 className="text-lg font-semibold">3. How We Use Your Information</h2>
            <p>The information we collect is used for the following purposes:</p>
            <ul>
                <li>To create and manage your user account.</li>
                <li>To provide and improve our services.</li>
                <li>To communicate with you regarding your account or our services.</li>
            </ul>

            <h2 className="text-lg font-semibold">4. Data Sharing and Disclosure</h2>
            <p>
                We do <strong>not</strong> sell, trade, or share your personal
                information with third parties. The data collected is used solely to
                operate and enhance our services.
            </p>
            <p>
                In specific instances, we may disclose your information if required by
                law, or to protect the rights, property, or safety of [Your App Name] or
                others.
            </p>

            <h2 className="text-lg font-semibold">5. Data Security</h2>
            <p>
                We implement appropriate technical and organizational measures to
                safeguard your information. While we strive to protect your personal
                data, no method of transmission over the Internet or electronic storage
                is 100% secure. Therefore, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-lg font-semibold">
                6. Third-Party Services (Google OAuth)
            </h2>
            <p>
                We use Google OAuth for account creation and login functionality. When
                you choose to log in using Google OAuth, you will be directed to
                Google’apos;s authentication services. We recommend reviewing
                Google'apos;s Privacy Policy for more details on how they handle your
                information:
                <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
            </p>

            <h2 className="text-lg font-semibold">7. Your Rights</h2>
            <p>
                If you are a resident of the European Union or other regions with laws
                governing data collection and use, you may have the following rights
                regarding your personal data:
            </p>
            <ul>
                <li>
                    <strong>Right to Access</strong>: You can request access to the
                    personal data we hold about you.
                </li>
                <li>
                    <strong>Right to Rectification</strong>: You can request the
                    correction of inaccurate information.
                </li>
                <li>
                    <strong>Right to Erasure</strong>: You can request the deletion of
                    your personal data, subject to certain legal obligations.
                </li>
                <li>
                    <strong>Right to Data Portability</strong>: You can request a copy of
                    your personal data in a structured, machine-readable format.
                </li>
                <li>
                    <strong>Right to Object</strong>: You may object to the processing of
                    your personal data for specific purposes.
                </li>
            </ul>
            <p>
                To exercise any of these rights, please contact us at [Your Contact
                Email].
            </p>

            <h2 className="text-lg font-semibold">8. Data Retention</h2>
            <p>
                We retain your personal information only for as long as necessary to
                fulfill the purposes for which it was collected or as required by law.
                Once your data is no longer needed, it will be securely deleted.
            </p>

            <h2 className="text-lg font-semibold">9. Children’apos;s Privacy</h2>
            <p>
                Our services are not intended for children under the age of 13, and we
                do not knowingly collect personal information from children. If you are
                a parent or guardian and believe that we have inadvertently collected
                personal information from a child, please contact us, and we will take
                steps to delete the information.
            </p>

            <h2 className="text-lg font-semibold">
                10. Changes to This Privacy Policy
            </h2>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be
                reflected in the “Effective Date” at the top of the policy. We encourage
                you to review this policy periodically to stay informed about how we are
                protecting your information.
            </p>

            <h2 className="text-lg font-semibold">11. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy or how we handle
                your data, please contact us at:
            </p>
            <p>cesar@marcialdev.com</p>
        </div>
    );
}
