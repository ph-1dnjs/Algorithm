import sys
input = sys.stdin.readline

T = int(input())
k = int(input())

dp = [0] * (T + 1)
dp[0] = 1

for _ in range(k):
    value, count = map(int, input().split())
    temp_dp = dp[:]
    for i in range(1, count + 1):
        for j in range(T, value * i - 1, -1):
            temp_dp[j] += dp[j - value * i]
    dp = temp_dp

print(dp[T])
