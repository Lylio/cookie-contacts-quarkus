package com.lylechristine.repository;

import com.lylechristine.model.Contact;
import io.quarkus.mongodb.panache.PanacheMongoRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ContactRepository implements PanacheMongoRepository<Contact> {
}
