import sys

n = int(sys.stdin.readline().strip())

def fibonacci(n):
    arr = [0, 1]
    index = len(arr) - 1

    while index != n:
        arr.append(arr[index - 1] + arr[index])
        index += 1

    return arr[index]

print(fibonacci(n))
