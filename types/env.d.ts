declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Email Configuration
      SMTP_HOST: string
      SMTP_PORT: string
      SMTP_SECURE: string
      SMTP_USER: string
      SMTP_PASS: string
      
      // Email Settings
      FROM_EMAIL: string
      FROM_NAME: string
      CONTACT_EMAIL: string
      
      // Application Settings
      NEXT_PUBLIC_APP_URL: string
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
