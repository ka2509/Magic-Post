package com.nhom10.MagicPost.Services;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {
    @Override
    public boolean test(String s) {
        //Regex validate email
        return true;
    }
}
