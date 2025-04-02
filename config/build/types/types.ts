export interface BuildPaths {
    entry: string
    html: string
    public: string
    output: string
    src: string
}

export type BuildMode = 'production' | 'development'

export interface BuildOptions {
    paths: BuildPaths
    mode: BuildMode
    port: number
}
