declare global{
    namespace NodeJS{
        interface ProcessEnv extends CloudFlareEnv{

        }
    }
}

export type {};