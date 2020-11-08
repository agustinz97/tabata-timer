export class ScreenAlive {
    wakeLock = null

    getIsSupported() {
        return 'wakeLock' in navigator
    }

    async keepAlive() {
        if (this.getIsSupported()) {
            try {
                this.wakeLock = await navigator.wakeLock.request('screen')
                this.wakeLock.addEventListener('release', function () {
                    console.log('WakeLock released')
                })

                this.getWakeLockAgainAfterVisibilityChange()

                console.log(this.wakeLock)
            } catch (e) {
                console.error(e)
            }
        }
    }

    async release() {
        if (this.getIsSupported()) {
            try {
                this.wakeLock.release().then(() => {
                    this.wakeLock = null
                })
                console.log(this.wakeLock)
            } catch (e) {
                console.error(e)
            }
        }
    }

    getWakeLockAgainAfterVisibilityChange() {
        document.addEventListener('visibilitychange', async () => {
            if (
                this.wakeLock !== null &&
                document.visibilityState === 'visible'
            ) {
                this.wakeLock = await navigator.wakeLock.request('screen')
            }
        })
    }
}
